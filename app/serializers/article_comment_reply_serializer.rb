class ArticleCommentReplySerializer < ActiveModel::Serializer
  attributes :id, :likes, :reply, :user_id,:article_comment_id
  belongs_to :user
  belongs_to :video_comment
end
