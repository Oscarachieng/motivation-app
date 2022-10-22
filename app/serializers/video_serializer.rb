class VideoSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :is_approved, :likes, :is_flagged
  has_many :video_comments
  belongs_to :user
  belongs_to :category
end
