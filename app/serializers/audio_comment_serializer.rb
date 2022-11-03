class AudioCommentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :audio_id, :comment, :likes
  has_many :audio_comment_replies
  belongs_to :audio
  belongs_to :user
end
