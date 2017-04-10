class Factory
  FIELDS = "title,artist,artist_title,caption,state_province,city,country,date_created,license_model"

  HEADERS = {"Api-Key" => ENV["API_KEY"]}

  def self.find_image(id)
    HTTParty.get("https://api.gettyimages.com/v3/images?ids=#{id}&fields=#{FIELDS}",headers: HEADERS)
  end

  def self.search_images(search_term)
    HTTParty.get("https://api.gettyimages.com/v3/search/images?sort_order=best&phrase=#{search_term}",headers:HEADERS)
  end

  def self.search_creative_images(search_term)
    HTTParty.get("https://api.gettyimages.com/v3/search/images/creative?phrase=#{search_term}",headers:HEADERS)
  end


end
