package com.Digital.Digital.Intergration;


import lombok.extern.java.Log;

@Log
public class KPException extends Exception{


    public KPException(String message) {
        super(message);
        log.info(message);
    }
}