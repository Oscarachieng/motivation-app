class CategorySerializer < ActiveModel::Serializer
  attributes :id, :category
  has_many :subscriptions
  has_many :users
end
