from config.mysqlconnection import connectToMySQL

class Recipe:
    def __init__(self, data):
        self.id = data['id']
        self.recipe_id = data['recipe_id']
        self.user_id = data['user_id']
        self.title = data['title']
        self.image = data['image']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def save(cls, data):
        query = "insert into recipe (recipe_id, user_id, title, image) values ( %(recipe_id)s, %(user_id)s,%(title)s, %(image)s  );"
        return connectToMySQL('super_brain_db').query_db(query, data)

    @classmethod
    def get_recipes_by_user_id(cls, id):
        id = {"id": id}
        query = "select * from recipe where user_id = ( %(id)s );"
        result =  connectToMySQL('super_brain_db').query_db(query, id)
        return result if result else []

    @staticmethod
    def validate_inputs(data):
        is_valid = True
        # check for whatever needs checking
        if ():
            is_valid = False
        return is_valid
