class User < ApplicationRecord
    has_secure_password
    validates :first_name,:last_name,:email, :username, :avatar_url,:password, :user_category,presence:true
    validates :email, uniqueness: true
    validates :password, length: { in: 8..24 }
    has_many :audios
    has_many :audio_comments
    has_many :audio_comment_replies
    has_many :videos
    has_many :video_comments
    has_many :video_comment_replies
    has_many :articles
    has_many :articles_comments
    has_many :articles_comment_replies
    has_many :wishes
    has_many :subscriptions
    has_many :categories, through: :subscriptions
   
end
