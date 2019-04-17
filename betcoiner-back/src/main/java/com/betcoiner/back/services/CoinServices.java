package com.betcoiner.back.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.betcoiner.back.dto.CoinDto;

@Service
public interface CoinServices {
	
	public List<CoinDto> getAllCoins();

}
