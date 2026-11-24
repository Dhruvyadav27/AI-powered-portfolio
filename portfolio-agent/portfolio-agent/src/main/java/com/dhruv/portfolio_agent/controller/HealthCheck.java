package com.dhruv.portfolio_agent.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HealthCheck {
    @GetMapping("/healthCheck")
    public String healthCheck() {
        return "I'm ok";
    }
}
