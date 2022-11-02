class PostCommentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :article_id, :comment, :likes
  has_many :post_comment_replies
  belongs_to :post
  belongs_to :user
end
