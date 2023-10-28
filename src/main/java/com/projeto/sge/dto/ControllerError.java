package com.projeto.sge.dto;

import java.time.Instant;

public class ControllerError {
    private Instant timestamp;
    private Integer status;
    private String error;
    private String patch;
    public ControllerError(Instant timestamp, Integer status, String error, String patch) {
        this.timestamp = timestamp;
        this.status = status;
        this.error = error;
        this.patch = patch;
    }
    public Instant getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Instant timestamp) {
        this.timestamp = timestamp;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }

    public String getPatch() {
        return patch;
    }

    public void setPatch(String patch) {
        this.patch = patch;
    }


}
