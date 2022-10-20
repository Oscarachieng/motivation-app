class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :username, :avatar_url, :password_digest, :user_category
end
