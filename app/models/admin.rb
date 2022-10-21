class Admin < ApplicationRecord
    has_secure_password
    #validations for the admin model
    validates_presence_of :first_name,  :last_name, :password, :email
    
    validates :email, uniqueness: true
    validates :password, length: { in: 12..24 } 
   
    #GET index 
   
    
   
end
