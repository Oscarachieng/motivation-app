class User < ApplicationRecord
    has_many :audio
    has_many :audio_comments
    has_many :audio_comment_replies
    has_many :video
    has_many :video_comments
    has_many :video_comment_replies
    has_many :articles
    has_many :articles_comments
    has_many :articles_comment_replies
    has_many :wishes
    has_many :categories
    has_many :subscriptions
end
