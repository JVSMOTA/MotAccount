package com.sapatariasmota.MotAccountWeb.services;

import com.sapatariasmota.MotAccountWeb.controllers.UsuarioController;
import com.sapatariasmota.MotAccountWeb.dtos.UsuarioRecordDto;
import com.sapatariasmota.MotAccountWeb.exception.UsuarioNotAuthorizedException;
import com.sapatariasmota.MotAccountWeb.exception.UsuarioNotFoundException;
import com.sapatariasmota.MotAccountWeb.models.UsuarioModel;
import com.sapatariasmota.MotAccountWeb.repositories.UsuarioRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@Service
public class UsuarioService {


    @Autowired
    private UsuarioRepository usuarioRepository;
    private final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    public List<UsuarioModel> getAllUsuarios() {
        List<UsuarioModel> usuarioModelList = usuarioRepository.findAll();
        if(!usuarioModelList.isEmpty()){
            for (UsuarioModel usuario : usuarioModelList) {
                UUID id = usuario.getIdUsuario();
                usuario.add(linkTo(methodOn(UsuarioController.class).getOneUsuario(id)).withSelfRel());
            }
        }
        return usuarioModelList;
    }

    public UsuarioModel getUsuarioById(UUID id) {
        UsuarioModel usuario = usuarioRepository.findById(id).orElseThrow(UsuarioNotFoundException::new);
        usuario.add(linkTo(methodOn(UsuarioController.class).getAllUsuarios()).withSelfRel());
        return usuario;
    }

    public UsuarioModel createUsuario(UsuarioRecordDto usuarioRecordDto) {
        UsuarioModel usuario = new UsuarioModel();
        BeanUtils.copyProperties(usuarioRecordDto, usuario);
        String encoder = this.passwordEncoder.encode(usuario.getSenha());
        usuario.setSenha(encoder);
        usuarioRepository.save(usuario);
        return usuario;
    }

    public UsuarioModel updateUsuario(UUID id, UsuarioRecordDto usuarioRecordDto){
        UsuarioModel usuario = usuarioRepository.findById(id).orElseThrow(UsuarioNotFoundException::new);
        BeanUtils.copyProperties(usuarioRecordDto, usuario);
        String encoder = this.passwordEncoder.encode(usuario.getSenha());
        usuario.setSenha(encoder);
        return usuario;
    }

    public void deleteUsuario(UUID id) {
        UsuarioModel usuario = usuarioRepository.findById(id).orElseThrow(UsuarioNotFoundException::new);
        usuarioRepository.deleteById(usuario.getIdUsuario());
    }

    public void validarSenha(UsuarioModel usuarioModel) {
        String senha = usuarioRepository.findById(usuarioModel.getIdUsuario()).orElseThrow(UsuarioNotFoundException::new).getSenha();
        if (!passwordEncoder.matches(usuarioModel.getSenha(), senha)) {
            throw new UsuarioNotAuthorizedException();
        }
    }
}
