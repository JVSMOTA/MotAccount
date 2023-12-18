package com.sapatariasmota.MotAccountWeb.controllers;

import com.sapatariasmota.MotAccountWeb.dtos.UsuarioRecordDto;
import com.sapatariasmota.MotAccountWeb.models.UsuarioModel;
import com.sapatariasmota.MotAccountWeb.repositories.UsuarioRepository;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@RestController
public class UsuarioController {

    @Autowired
    UsuarioRepository usuarioRepository;

    private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @PostMapping("/usuarios")
    public ResponseEntity<UsuarioModel> saveUsuario(@RequestBody @Valid UsuarioRecordDto usuarioRecordDto) {
        var usuarioModel = new UsuarioModel();
        BeanUtils.copyProperties(usuarioRecordDto, usuarioModel);
        String encoder = this.passwordEncoder.encode(usuarioModel.getSenha());
        usuarioModel.setSenha(encoder);
        return ResponseEntity.status(HttpStatus.CREATED).body(usuarioRepository.save(usuarioModel));
    }


    @GetMapping("/usuarios")
    public ResponseEntity<List<UsuarioModel>> getAllUsuarios() {
        List<UsuarioModel> usuarioList = usuarioRepository.findAll();
        if(!usuarioList.isEmpty()){
            for (UsuarioModel usuario : usuarioList) {
                UUID id = usuario.getIdUsuario();
                usuario.add(linkTo(methodOn(UsuarioController.class).getOneUsuario(id)).withSelfRel());
            }
        }
        return ResponseEntity.status(HttpStatus.OK).body(usuarioList);
    }

    @GetMapping("/usuarios/{id}")
    public ResponseEntity<Object> getOneUsuario(@PathVariable(value = "id") UUID id) {
        Optional<UsuarioModel> usuarioO = usuarioRepository.findById(id);
        if(usuarioO.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuário not found.");
        }
        usuarioO.get().add(linkTo(methodOn(UsuarioController.class).getAllUsuarios()).withSelfRel());
        return ResponseEntity.status(HttpStatus.OK).body(usuarioO.get());
    }

    @PutMapping("/usuarios/{id}")
    public ResponseEntity<Object> updateUsuario(@PathVariable(value = "id") UUID id,
                                             @RequestBody @Valid UsuarioRecordDto usuarioRecordDto) {
        Optional<UsuarioModel> usuarioO = usuarioRepository.findById(id);
        if(usuarioO.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuário not found.");
        }
        var usuarioModel = usuarioO.get();
        BeanUtils.copyProperties(usuarioRecordDto, usuarioModel);
        String encoder = this.passwordEncoder.encode(usuarioModel.getSenha());
        usuarioModel.setSenha(encoder);
        return ResponseEntity.status(HttpStatus.OK).body(usuarioRepository.save(usuarioModel));
    }

    @DeleteMapping("/usuarios/{id}")
    public ResponseEntity<Object> deleteUsuario(@PathVariable(value = "id") UUID id) {
        Optional<UsuarioModel> usuarioO = usuarioRepository.findById(id);
        if(usuarioO.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuário not found.");
        }
        usuarioRepository.delete(usuarioO.get());
        return ResponseEntity.status(HttpStatus.OK).body("Usuário deleted successfully.");
    }

    @PostMapping("/login")
    public ResponseEntity<UsuarioModel> validarSenha(@RequestBody UsuarioModel usuarioModel) {
        String senha = usuarioRepository.getById(usuarioModel.getIdUsuario()).getSenha();
        Boolean valid = passwordEncoder.matches(usuarioModel.getSenha(), senha);
        if (!valid) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        return ResponseEntity.status(HttpStatus.OK).body(usuarioModel);
    }
}
