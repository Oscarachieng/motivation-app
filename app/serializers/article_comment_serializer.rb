class ArticleCommentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :article_id, :comment, :likes
  has_many :article_comment_replies
  belongs_to :article
  belongs_to :user
end
