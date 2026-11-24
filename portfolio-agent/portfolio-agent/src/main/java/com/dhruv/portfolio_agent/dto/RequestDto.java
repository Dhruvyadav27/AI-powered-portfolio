package com.dhruv.portfolio_agent.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record RequestDto(@NotBlank(message = "Please tell me what's in your mind !")
                         @Size(max = 500, message = "Please ask a shorter question")
                         String question) {

}
