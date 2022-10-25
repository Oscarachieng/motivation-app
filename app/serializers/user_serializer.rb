class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :first_name, :last_name, :email, :username,:user_category,:avatar_url
  has_many :audios
  has_many :videos
  has_many :articles
  has_many :categories

  #Custom method for fetching the uploaded image url
  def avatar_url
    if object.avatar_url.attached?
      {
        url: rails_blob_url(object.avatar_url,host:"localhost:3000")
      }
    else
      {
        url: nil
      }
    end
  end


  # def avatar_url
  #   object.avatar_url.blob.key if object.avatar_url.attached? 
  # end
end
