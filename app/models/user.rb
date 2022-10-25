class User < ApplicationRecord
    has_secure_password 
    has_one_attached :avatar_url
    validates :first_name,:last_name,:email, :username, :avatar_url,:password, :user_category,presence:true
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
   

    # def get_photo_url
    #     if self.avatar_url.attached?
    #         url_for(self.avatar_url)
    #     end
    # end
end
