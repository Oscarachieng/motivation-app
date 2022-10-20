class StudentSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :avatar_url, :username, :password_digest
end
