package com.dhruv.portfolio_agent.service;

import org.springframework.stereotype.Service;

@Service
public class ChatService {

    public String answer(String question) {
        return "Echo: " + question;
    }

}
