class Factory
  FIELDS = "title,artist,artist_title,caption,state_province,city,country,date_created"
  HEADERS = {"Api-Key" => "j878g39yx378pa77djthzzpn"}

  def self.find_image(id)
    HTTParty.get("https://api.gettyimages.com/v3/images?ids=#{id}&fields=#{FIELDS}",headers: HEADERS)
  end

  def self.search_images(search_term)
    HTTParty.get("https://api.gettyimages.com/v3/search/images?phrase=#{search_term}",headers:HEADERS)
  end
end
