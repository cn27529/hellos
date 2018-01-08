using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApiDemo.Models;

namespace WebApiDemo.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        public ITodoRepository _TodoRepository { get; set; }

        public ValuesController(ITodoRepository todoRepository)
        {
            _TodoRepository = todoRepository;
        }

        // GET api/values
        [HttpGet]
        public IEnumerable<TodoItem> Get()
        {
            return _TodoRepository.GetAll();
        }

        // GET api/values/5
        [HttpGet("{id}", Name = "GetTodo")]
        public TodoItem Get(string id)
        {
            return _TodoRepository.Find(id);
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]TodoItem value)
        {
            if (value == null)
                return BadRequest();

            _TodoRepository.Add(value);

            //CreatedAtRoute 會建立一個狀態 201 的回應，這是為了符合 HTTP 的標準，也就為通知 Client 端新增資源位於那個位置
            //Headers： Location →http://localhost:54689/api/Todo/b5cd9427-9db7-492d-9bfc-7bb912d9746a
            return CreatedAtRoute("GetTodo", new { controller = "Todo", id = value.Key }, value);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(string id, [FromBody]TodoItem value)
        {
            if (value == null || value.Key != id)
                return BadRequest();

            var todo = _TodoRepository.Find(id);

            if (todo == null)
                return NotFound();

            _TodoRepository.Update(value);

            return new NoContentResult();
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            var todo = _TodoRepository.Find(id);

            if (todo == null)
                return NotFound();

            _TodoRepository.Remove(id);

            return new NoContentResult();
        }
    }
}
