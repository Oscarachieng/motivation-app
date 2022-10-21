class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :username, :avatar_url
  has_many :audios
  has_many :videos
  has_many :articles
end
