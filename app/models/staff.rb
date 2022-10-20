class Staff < ApplicationRecord
    #validations 
    validates_presence_of :first_name, :last_name, :password, :email
    validates :password, length: { minimu:8, maximum: 16}
    validates :email, uniqueness: true
    # validates :email,
    
    #Associations 
end

