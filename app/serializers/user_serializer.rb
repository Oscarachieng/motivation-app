class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :username, :avatar_url,:user_category
  has_many :audios
  has_many :videos
  has_many :articles
  has_many :categories
end
