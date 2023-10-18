from config.mysqlconnection import connectToMySQL

class Recipe:
    def __init__(self, data):
        self.id = data['id']
        self.users_id = data['user_id']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def save(cls, data):
        query = "insert into recipes (recipe_id, users_id) values ( %(recipe_id)s, %(user_id)s );"
        return connectToMySQL('superbrain_schema').query_db(query, data)

    @staticmethod
    def validate_inputs(data):
        is_valid = True
        # check for whatever needs checking
        if ():
            is_valid = False
        return is_valid