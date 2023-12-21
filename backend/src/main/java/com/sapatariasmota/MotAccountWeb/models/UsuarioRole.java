package com.sapatariasmota.MotAccountWeb.models;

public enum UsuarioRole {
    USER("user"),
    ADMIN("admin");

    private String role;

    UsuarioRole(String role){
        this.role = role;
    }

    public String getRole() {
        return role;
    }
}
