class ArticleCommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :likes,:user_id, :article_id
  has_many :article_comment_replies
  belongs_to :user
  belongs_to :article
end
