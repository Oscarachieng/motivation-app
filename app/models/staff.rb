class Staff < ApplicationRecord
    #validations 
    validates_presence_of :first_name, :last_name, :password, :email
    validates :password, length: { minimu:8, maximum: 16}
    validates :email, uniqueness: true
    # validates :email,
    # format: { with: /^(.+)@(.+)$/, message: "Email invalid"  },
    #           uniqueness: { case_sensitive: false },
    #           length: { minimum: 4, maximum: 254 }
    #Associations 
    has_many :posts
end

