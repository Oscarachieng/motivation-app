class ArticleCommentReplySerializer < ActiveModel::Serializer
  attributes :id, :likes, :reply, :user_id,:article_comment_id
  belongs_to :article_comment
end
