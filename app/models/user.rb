class User < ApplicationRecord
    has_secure_password 
    # self.per_page = 5
    has_one_attached :avatar_url
    validates :first_name,:last_name,:email, :password, :user_category,presence:true
    validates :email, uniqueness: true
    validates :password, length: { in: 8..24 }
    # has_many :audios
    # has_many :audio_comments
    # has_many :audio_comment_replies
    # has_many :videos
    # has_many :video_comments
    # has_many :video_comment_replies
    has_many :posts
    has_many :post_comments
    has_many :post_comment_replies
    #has_one_attached :avatar_url
    has_many :wishes
    # has_many :subscriptions
    category_id :categories
   

    # def get_photo_url
    #     if self.avatar_url.attached?
    #         url_for(self.avatar_url)
    #     end
    # end
end
