class PostCommentReplySerializer < ActiveModel::Serializer
  attributes :id, :likes, :reply, :user_id,:post_comment_id
  belongs_to :post_comment
end
