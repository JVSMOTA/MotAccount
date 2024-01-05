package com.sapatariasmota.MotAccountWeb.services;

import com.sapatariasmota.MotAccountWeb.dtos.UsuarioRecordDto;
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

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;
    private final PasswordEncoder passwordEncoder;

    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    public UsuarioModel createUsuario(UsuarioRecordDto usuarioRecordDto) {
        UsuarioModel usuario = new UsuarioModel();
        BeanUtils.copyProperties(usuarioRecordDto, usuario);
        String encoder = this.passwordEncoder.encode(usuario.getSenha());
        usuario.setSenha(encoder);
        usuarioRepository.save(usuario);
        return usuario;
    }

    public List<UsuarioModel> getAllUsuarios() {
        return usuarioRepository.findAll();
    }

    public UsuarioModel getUsuarioById(UUID id) {
        return usuarioRepository.findById(id).orElseThrow(UsuarioNotFoundException::new);
    }

    public UsuarioModel updateUsuario(UUID id, UsuarioRecordDto usuarioRecordDto){
        UsuarioModel usuario = usuarioRepository.findById(id).orElseThrow(UsuarioNotFoundException::new);
        BeanUtils.copyProperties(usuarioRecordDto, usuario);
        String encoder = this.passwordEncoder.encode(usuario.getSenha());
        usuario.setSenha(encoder);
        usuarioRepository.save(usuario);
        return usuario;
    }

    public void deleteUsuario(UUID id) {
        UsuarioModel usuario = usuarioRepository.findById(id).orElseThrow(UsuarioNotFoundException::new);
        usuarioRepository.deleteById(usuario.getIdUsuario());
    }

//    public Token gerarToken(@NotNull @Valid UsuarioLoginDto usuario) {
//        UserDetails user = usuarioRepository.findByEmail(usuario.getEmail());
//        if (user != null) {
//            boolean valid = passwordEncoder.matches(usuario.getSenha(), user.getPassword());
//            if (valid) {
//                return new Token(TokenUtil.createToken(user));
//            }
//        }
//        return null;
//    }
}
