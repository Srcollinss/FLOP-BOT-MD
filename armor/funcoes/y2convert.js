const axios = require("axios");
const cheerio = require("cheerio");

const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/
  
const y2convert = url => {
  return new Promise(resolve => {
    axios.get(`https://y2convert.net/file/all/${ytIdRegex.exec(url)[1]}`).then(async resp => {
      
      const $ = await cheerio.load(resp.data);
      
      let tumblr = await $("img.w-auto").eq(1).attr("src");
      let titulo = await $('h4[class="pl-4 font-medium text-gray-600 text-md md:pl-0"]').text().trim();
      let duracao = await $(".pt-2").eq(0).text();
      let tamanho_msc = await $("#tab-mp3 > table > tbody").find("tr").eq(0).find("td").eq(1).text();
      let tamanho_vid = await $("#tab-mp4 > table > tbody").find("tr").eq(0).find("td").eq(1).text();
      let linkmsc = await $("#tab-mp3 > table > tbody").find("tr").eq(0).find("td").eq(2).find("a").attr("href");
      let linkvid = await $("#tab-mp4 > table > tbody").find("tr").eq(0).find("td").eq(2).find("a").attr("href");
      let dados = {tumblr, titulo, duracao, linkmsc, linkvid, tamanho_vid, tamanho_msc}
      
      resolve(dados)
    })
  })
}

module.exports = { y2convert }
