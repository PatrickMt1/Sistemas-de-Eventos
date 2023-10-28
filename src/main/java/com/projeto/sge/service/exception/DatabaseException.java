package com.projeto.sge.service.exception;

public class DatabaseException extends RuntimeException{
    public DatabaseException(String msg)
    {
        super(msg);
    }
}
