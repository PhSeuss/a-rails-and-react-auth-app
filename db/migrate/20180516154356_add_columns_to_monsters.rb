class AddColumnsToMonsters < ActiveRecord::Migration[5.1]
  def change
    change_table :monsters do |t|
      t.string :name
      t.string :description
      t.belongs_to :user
    end
  end
end
