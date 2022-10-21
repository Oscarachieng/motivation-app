class VideoCommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :likes, :video_id,:user_id
  has_many :video_comment_replies
  belongs_to :user
  belongs_to :video
end
