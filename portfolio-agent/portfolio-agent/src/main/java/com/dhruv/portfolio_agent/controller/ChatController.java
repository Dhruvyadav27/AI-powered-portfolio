package com.dhruv.portfolio_agent.controller;

import com.dhruv.portfolio_agent.dto.RequestDto;
import com.dhruv.portfolio_agent.dto.ResponseDto;
import com.dhruv.portfolio_agent.service.ChatService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ChatController {

    private final ChatService chatService;

    public ChatController(ChatService chatService) {
        this.chatService = chatService;
    }

    @PostMapping("/request")
    public ResponseEntity<ResponseDto> request(@Valid @RequestBody RequestDto requestDto) {

        String question = requestDto.question();
        String response = chatService.answer(question);
        return ResponseEntity.ok(new ResponseDto(response));
    }
}
