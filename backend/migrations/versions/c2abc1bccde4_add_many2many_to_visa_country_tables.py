"""Add many2many to Visa & Country tables

Revision ID: c2abc1bccde4
Revises: a70484643194
Create Date: 2020-08-04 12:48:56.233811

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c2abc1bccde4'
down_revision = 'a70484643194'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('visa_country',
    sa.Column('visa_id', sa.Integer(), nullable=False),
    sa.Column('country_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['country_id'], ['country.id'], ),
    sa.ForeignKeyConstraint(['visa_id'], ['visa.id'], ),
    sa.PrimaryKeyConstraint('visa_id', 'country_id')
    )
    op.add_column('visa', sa.Column('issuing_country_id', sa.Integer(), nullable=False))
    op.add_column('visa', sa.Column('some_string', sa.String(), nullable=True))
    op.create_foreign_key(None, 'visa', 'country', ['issuing_country_id'], ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'visa', type_='foreignkey')
    op.drop_column('visa', 'some_string')
    op.drop_column('visa', 'issuing_country_id')
    op.drop_table('visa_country')
    # ### end Alembic commands ###
