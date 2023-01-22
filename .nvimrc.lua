-- Powered by projectlocal-vim
-- https://github.com/creativenull/projectlocal-vim
local lspconfig = require('lspconfig')
local pl = require('projectlocal.lsp')

lspconfig.volar.setup(pl.get_config({
  filetypes = { 'typescript', 'javascript', 'javascriptreact', 'typescriptreact', 'vue', 'json' },
  on_new_config = function(new_config, new_root_dir)
    new_config.init_options.typescript.tsdk = string.format('%s/node_modules/typescript/lib', new_root_dir)
  end,
}))

local augroup = vim.api.nvim_create_augroup('UserAleGroup', {})
vim.api.nvim_create_autocmd('FileType', {
  group = augroup,
  pattern = { 'vue', 'typescript' },
  callback = function(auopts)
    vim.b[auopts.buf].ale_linters = { 'eslint' }
    vim.b[auopts.buf].ale_fixers = { 'prettier' }
  end,
})
