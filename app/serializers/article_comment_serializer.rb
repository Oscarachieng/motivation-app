class ArticleCommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :likes
  belongs_to :article
  has_many :article_comment_replies
end
