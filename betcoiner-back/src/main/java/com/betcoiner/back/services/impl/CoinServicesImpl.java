package com.betcoiner.back.services.impl;

import java.io.IOException;
import java.util.List;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Service;

import com.betcoiner.back.dto.CoinDto;
import com.betcoiner.back.services.CoinServices;

@Service
public class CoinServicesImpl implements CoinServices {

	@Override
	public List<CoinDto> getAllCoins() {
		Document doc;
        try {

            // need http protocol
            doc = Jsoup.connect("http://google.com").get();

            // get page title
            String title = doc.title();
            System.out.println("title : " + title);

            // get all links
            Elements links = doc.select("a[href]");
            for (Element link : links) {

                // get the value from href attribute
                System.out.println("\nlink : " + link.attr("href"));
                System.out.println("text : " + link.text());

            }

        } catch (IOException e) {
            e.printStackTrace();
        }
		return null;
	}

}
