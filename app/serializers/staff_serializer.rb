class StaffSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :password
end
