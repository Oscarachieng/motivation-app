class SubscriptionSerializer < ActiveModel::Serializer
  attributes :id, :student_id, :category_id
  belongs_to :user
end
