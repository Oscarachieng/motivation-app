class AdminSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :password_digest
end
