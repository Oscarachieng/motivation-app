class VideoCommentReplySerializer < ActiveModel::Serializer
  attributes :id, :reply, :likes, :user_id,:video_comment_id
  belongs_to :user
  belongs_to :video_comment
end
