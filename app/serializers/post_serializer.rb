class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :is_approved, :likes, :is_flagged, :user_id
  has_many :post_comments
  belongs_to :user
  belongs_to :category
end
