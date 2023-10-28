package com.projeto.sge.advice;

import com.projeto.sge.dto.ControllerError;
import com.projeto.sge.service.exception.ResourceNotFountExecption;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.time.Instant;

@ControllerAdvice
public class ControllerException
{
    @ExceptionHandler(ResourceNotFountExecption.class)
    public ResponseEntity<ControllerError> resourceNotFound(ResourceNotFountExecption e, HttpServletRequest request)
    {
        HttpStatus status = HttpStatus.NOT_FOUND;
        ControllerError error = new ControllerError(Instant.now(), status.value(), e.getMessage(), request.getRequestURI());
        return ResponseEntity.status(status).body(error);
    }
}
