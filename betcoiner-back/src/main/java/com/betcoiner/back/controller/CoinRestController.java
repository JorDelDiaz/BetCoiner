package com.betcoiner.back.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.betcoiner.back.dto.CoinDto;
import com.betcoiner.back.services.impl.CoinServicesImpl;

@RestController
public class CoinRestController {
	
	@Autowired
	private CoinServicesImpl coinService;
	
	@GetMapping("allCoins")
	public List<CoinDto> getAllCoins(){
		return coinService.getAllCoins();
		
	}

}
