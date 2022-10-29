class SubscriptionSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :category_id
  belongs_to :user
  belongs_to :category
end
