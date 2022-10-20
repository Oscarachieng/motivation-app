class AudioCommentReplySerializer < ActiveModel::Serializer
  attributes :id, :user_id, :audio_comment, :reply, :likes
end
